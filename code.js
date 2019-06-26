

var app = new Vue ({
    el: "#app",

    data: {
        greeting: "Collectors Blog",
        page: "",
        drawer: false,
        posts: [
            {
                title: "first post",
                author: "mr. stock",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/huwV4cW.jpg",
                text: "lorem ipsum blah blah blah blah blah blah blah",
                likes: 0,
                shares: 0
            },
            {
                title: "first post",
                author: "mr. stock",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/huwV4cW.jpg",
                text: "lorem ipsum blah blah blah blah blah blah blah",
                likes: 0,
                shares: 0
            },
            {
                title: "first post",
                author: "mr. stock",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/huwV4cW.jpg",
                text: "lorem ipsum blah blah blah blah blah blah blah",
                likes: 0,
                shares: 0
            },
            {
                title: "first post",
                author: "mr. stock",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/huwV4cW.jpg",
                text: "lorem ipsum blah blah blah blah blah blah blah",
                likes: 0,
                shares: 0
            },
            {
                title: "first post",
                author: "mr. stock",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/huwV4cW.jpg",
                text: "lorem ipsum blah blah blah blah blah blah blah",
                likes: 0,
                shares: 0
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
        new_title: "",
        new_author: "",
        new_category: "all",
        new_image: "",
        new_text: "",
    },

    methods: {
        addPost: function () {
            var new_post = {
                title: this.new_title,
                author: this.new_author,
                category: this.new_category,
                date: new Date(),
                image: this.new_image,
                text: this.new_text,
                likes: 0,
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