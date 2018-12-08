import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
import About from '../components/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'root',
            path: '/',
            components: {
                main: PostList
            }
        },
        {
            name: 'about',
            path: '/about/',
            components: {
                main: About
            }
        },
        {
            name: 'post_content',
            path: '/topic/:id&author=:name',
            components: {
                main: Article,
                slidebar: SlideBar
            }
        },
        {
            name: 'user_info',
            path: '/userinfo/:name',
            components: {
                main: UserInfo
            }
        }
    ]
})
