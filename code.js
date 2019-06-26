

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
    },

    created: function () {
        this.getPosts();
    },

    methods: {
        getPosts: function () {
            fetch("http://localhost:3000/posts").then( function ( res ) {
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
            this.posts.unshift(new_post);
            this.new_title= "";
            this.new_author="";
            this.new_category="all";
            this.new_image="";
            this.new_text="";
            this.page="blog";
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