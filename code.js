

var app = new Vue ({
    el: "#app",

    data: {
        greeting: "Collectors Blog",
        page: "",
        drawer: false,
        categories: [
            "all",
            "clothing",
            "hunting",
            "books",
            "cards",
            "coins",
            "stamps",
            "comic books",
            "keychains",
            "misc"
        ],
        selected_category: "all",
        posts: [ ],
        new_title: "",
        new_author: "",
        new_category: "all",
        new_image: "",
        new_text: "",
        serverUrl: "https://blog-server-codeschool.herokuapp.com/",
    },
    

    created: function () {
        app.getPosts();
    },

    methods: {
        getPosts: function () {
            fetch( this.serverUrl + "/posts").then( function ( res ) {
                res.json( ).then( function ( data ) {
                    console.log( data );
                    app.post = data.posts;
                })
            });
        },

        addPost: function () {
            var date = new Date();
            var new_post = {
                title: this.new_title,
                author: this.new_author,
                category: this.new_category,
                date: date.toString(),
                image: this.new_image,
                text: this.new_text,
            };

            fetch( this.serverUrl + "/posts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify( new_post )
            }).then( function ( res ) {
                if ( res.status == 400 ) {
                    res.json( ).then( function ( data ) {
                        alert( data.msg );
                    })
                } else if ( res.status == 201 ) {
                    console.log( "Added" );
                    app.getPosts();
                }
            })
            this.posts.unshift(new_post);
            this.new_title= "";
            this.new_author="";
            this.new_category="all";
            this.new_image="";
            this.new_text="";
            this.page="blog";
        },

        deletePost: function (post) {
            fetch(`${this.serverUrl}/posts/${post._id}`, {
                method: "DELETE"
            }).then( function ( response ) {
                if ( response.status == 204 ) {
                    console.log("It worked");
                    app.getPosts();
                } else if ( response.status == 400 ) {
                    response.json().then( function ( data ) {
                        alert(data.msg);
                    })
                }
            })
        },
    },

    computed: {
        sortedPosts: function () {
            if ( this.selected_category == "all" ) {
                return this.posts;
            } else {
                return this.posts.filter( function ( post ) {
                    return post.category == app.selected_category;
                })
            }
        },
    }
})