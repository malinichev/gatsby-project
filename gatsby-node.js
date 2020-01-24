/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions
  

  const result = await graphql(`
    {
        allWordpressPage {
          edges {
            node {
              id
              path
              status
              template
              slug
              
            }
          }
        }
        allWordpressPost {
          edges {
            node {
              wordpress_id
              title
              slug
              categories {
                  slug
                  path
              }
            }
          }
        }
        allWordpressCategory {
          edges {
            node {
              path
            }
          }
        }
        
         
          
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

 // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost, allWordpressCategory } = result.data




  
  

    //create pages
// const pagesTemplate = path.resolve("./src/templates/pageTempl/page.js")
allWordpressPage.edges.forEach(
  pages =>{
    console.log(pages.node.slug)
    createPage({       
      path: pages.node.path,
      // Create indvidual .js file each page in wordpress
      component: path.resolve(`./src/templates/pageTempl/${pages.node.template.split('.')[0]}.js`),
      context: {
          idPage: pages.node.wordpress_id,
          titlePage: pages.node.title,
          slugPage: pages.node.slug,
          pathPage: pages.node.path,
          categListPath: allWordpressCategory.edges,
      },
    })    
  })








//  //create Category
 const CategoryTemplate = path.resolve("./src/templates/pageTempl/catalogTemplate.js")


 allWordpressCategory.edges.forEach(cat => {
    
        // console.log(cat.node.path)
              createPage({
                 path: `${cat.node.path}`,
                 component: CategoryTemplate,
                 context: {
                     id: cat.node.id,
                     catPath: cat.node.path
                 },
             })
        
 
 })








    //create Posts
const newsPostTemplate = path.resolve("./src/templates/postTempl/newsPost.js")
const productPostTemplate = path.resolve("./src/templates/postTempl/productPost.js")


allWordpressPost.edges.forEach(post => {
  function compareSlug(a, b) {
    if (a.slug == "catalog" || a.slug == "news") {
      return -1
    }else{
      return 1
    }
  }
        
  
        post.node.categories.sort(compareSlug); //news and catalog on FIRST place
  
        if(post.node.categories[0].path === 'catalog' && post.node.categories[1]){
             createPage({
                path: `${post.node.categories[1].path}${post.node.slug}`,
                component: productPostTemplate,
                context: {
                    id: post.node.wordpress_id,
                    postPath: post.node.categories[1].path
                    
                 
                },
            })
        }else{
            createPage({
                path: `${post.node.categories[1].path}${post.node.slug}`,
                component: newsPostTemplate,
                context: {
                    id: post.node.wordpress_id,
                    slug: post.node.slug,
                    postPath: post.node.categories[1].path
                    
                },
            })
        };   
        
  })
}



