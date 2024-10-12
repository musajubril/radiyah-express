class LoginController {
    main(req, res){
        req.method==='GET' ? this.getLoginREQController(req, res) : this.postLoginREQController(req, res)    
        }
    getLoginREQController(req, res){
        const loginFields = [
            {id: 1, label: 'Username', type: 'text', name: 'username', placeholder: 'Enter your username'},
            {id: 2, label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password'}
        ]
        res.render('login', {loginFields});
    }
    postLoginREQController(req, res){
        res.redirect('/')

    }
}
const loginController = new LoginController()
const login = loginController.main.bind(loginController)
module.exports = login