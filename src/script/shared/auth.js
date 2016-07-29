import helpers from "./helpers";

const loggedIn = function() {
    return true;
}

export default {
    login(data, cb) {
        cb({status: true});
        console.log(helpers.httpGET());
    },

    signup(data, cb) {
        cb({status: true, user: {}});
    },
	
    requireAuth(nextState, replace) {
        if (!loggedIn()) {
            replace({
                pathname: '/',
                state: { nextPathname: nextState.location.pathname }
            })
        }
    },

    test() {
        return "blahs";
    }
};
