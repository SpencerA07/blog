

var app = new Vue ({
    el: "#app",

    data: {
        page: "blog",
        posts: [
            {
                title: "first post",
                author: "mr. stock",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/huwV4cW.jpg",
                text: "lorem ipsum blah blah blah blah blah blah blah"
            },
            {
                title: "first post",
                author: "mr. stock",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/huwV4cW.jpg",
                text: "lorem ipsum blah blah blah blah blah blah blah"
            },
            {
                title: "first post",
                author: "mr. stock",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/huwV4cW.jpg",
                text: "lorem ipsum blah blah blah blah blah blah blah"
            },
            {
                title: "first post",
                author: "mr. stock",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/huwV4cW.jpg",
                text: "lorem ipsum blah blah blah blah blah blah blah"
            },
            {
                title: "first post",
                author: "mr. stock",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/huwV4cW.jpg",
                text: "lorem ipsum blah blah blah blah blah blah blah"
            },
        ],
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