const { Router } = require('express');
const rateLimit = require('express-rate-limit');
const router = Router();

// Import Middlewares
const {
	validationSignup,
	isUserExistsSignup,
	validateLogin,
	authenticateToken,
	validationUpdateProfile,
	isUserExistsUpdate,
	validationChangePassword,
	validationForgotPassword,
	isEmailRegistered,
	validationResetPassword,
	isResetTokenValid,
} = require('../middlewares/userMiddleware');

// Import Controllers
const usersController = require('../controllers/usersController');

const authRateLimit = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 20,
	standardHeaders: true,
	legacyHeaders: false,
});

router.post(
	'/user/signup',
	[authRateLimit, validationSignup, isUserExistsSignup],
	usersController.signUp
); // sends verification link to user
router.get('/user/signup/verify/:token', usersController.signUpVerify); // verify user link when clicked
router.post('/user/login', [authRateLimit, validateLogin], usersController.login);
router.get('/user', [authRateLimit, authenticateToken], usersController.getLoggedInUser); // get logged in user
router.post(
	'/user/update_profile',
	[authRateLimit, authenticateToken, validationUpdateProfile, isUserExistsUpdate],
	usersController.updateProfile
);
router.post(
	'/user/change_password',
	[authRateLimit, authenticateToken, validationChangePassword],
	usersController.changePassword
);
router.post(
	'/user/forgot_password',
	[authRateLimit, validationForgotPassword, isEmailRegistered],
	usersController.forgotPassword
); // sends reset link to user

router.get(
	'/user/forgot_password/verify/:token',
	usersController.forgotPasswordVerify
); // verify reset link when clicked
router.post(
	'/user/reset_password',
	[authRateLimit, validationResetPassword, isResetTokenValid],
	usersController.resetPassword
); // reset to new password

module.exports = router;
