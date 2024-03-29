import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "404Header": "404 Error",
            "404Link": "Twitter.com",
            "startHeader-1": "Happening now",
            "startHeader-2": "Join Twitter today",
            "startSignupBtn": "Sign Up",
            "startLoginBtn": "Log In",
            "startSearchBtn": "Explore",
            "startSignupHeader": "Create New Account",
            "startLoginHeader": "Login with Account",
            "startFormLabel-1": "Full Name",
            "startFormLabel-2": "User Name",
            "startFormLabel-3": "Password",
            "startFormHandler": "Cancel",
            "startFormHandlerSignup": "Save",
            "startFormHandlerLogin": "Log In",
            "signupSuccessMessage": "User created successfully",
            "signupWarningMessage": "Username already exists. Please log in to your account",
            "loginSuccessMessage": "User logged in successfully",
            "loginErrorMessage": "User information is incorrect",
            "homeTitleMenu": "Home",
            "exploreTitleMenu": "Explore",
            "notificationsTitleMenu": "Notifications",
            "messagesTitleMenu": "Messages",
            "profileTitleMenu": "Profile",
            "moreTitleMenu": "More",
            "tweetBtnMenu": "Tweet",
            "exploreInpPlaceholder": "Search Twitter",
            "hashTagsHeader": "Trends for You",
            "newTweetLabel": "What's Happening?",
            "newTweetBtn": "Tweet",
            "tokenUserBtn": "Settings",
            "tokenUserBtn-1": "Change Photo",
            "tokenUserBtn-2": "Logout",
            "userBtn-1": "Tweets",
            "userBtn-2": "Tweets & replise",
            "userBtn-3": "Media",
            "userBtn-4": "Likes",
            "userTweetTitle": "User has no tweets",
            "404Helmet": "NotFound | Twitter",
            "startHelmet": "Twitter. It's what's happening | Twitter",
            "tweetHelmet": "Home | Twitter",
            "exploreHelmet": "Explore | Twitter",
            "profileHelmet": "Account | Twitter",
        }
    },
    fa: {
        translation: {
            "404Header": "خطای 404",
            "404Link": "Twitter.com",
            "startHeader-1": "اتفاقاتی که الان در حال رخ دادن است",
            "startHeader-2": "همین حالا به توییتر بپیوندید",
            "startSignupBtn": "ثبت نام",
            "startLoginBtn": "ورود",
            "startSearchBtn": "جستجو به عنوان مهمان",
            "startSignupHeader": "ایجاد حساب جدید",
            "startLoginHeader": "ورود با حساب کاربری",
            "startFormLabel-1": "نام و نام خانوادگی",
            "startFormLabel-2": "نام کاربری",
            "startFormLabel-3": "رمز عبور",
            "startFormHandler": "لغو",
            "startFormHandlerSignup": "ذخیره",
            "startFormHandlerLogin": "ورود",
            "signupSuccessMessage": "کاربر با موفقیت ساخته شد",
            "signupWarningMessage": "نام کاربری موجود است. لطفا وارد حساب کاربری خود شوید.",
            "loginSuccessMessage": "کاربر با موفقیت وارد شد",
            "loginErrorMessage": "اطلاعات کاربر نادرست است",
            "homeTitleMenu": "خانه",
            "exploreTitleMenu": "جستجو",
            "notificationsTitleMenu": "هشدار ها",
            "messagesTitleMenu": "پیام ها",
            "profileTitleMenu": "نمایه کاربر",
            "moreTitleMenu": "بیشتر",
            "tweetBtnMenu": "توییت",
            "exploreInpPlaceholder": "جستجو در توییتر",
            "hashTagsHeader": "داغ ترین هشتگ ها",
            "newTweetLabel": "چه چیزی اتفاق افتاده است؟",
            "newTweetBtn": "ثبت",
            "tokenUserBtn": "تغییرات",
            "tokenUserBtn-1": "تغییر نمایه",
            "tokenUserBtn-2": "خروج از سایت",
            "userBtn-1": "توییت ها",
            "userBtn-2": "توییت ها و واکنش ها",
            "userBtn-3": "اشتراک ها",
            "userBtn-4": "مورد پسندها",
            "userTweetTitle": "کاربر هیچ توییتی ندارد",
            "404Helmet": "ناموجود | توییتر",
            "startHelmet": "توییتر. همه جیزهایی که دارد رخ می دهد | توییتر",
            "tweetHelmet": "خانه | توییتر",
            "exploreHelmet": "جستجو | توییتر",
            "profileHelmet": "نمایه کاربر | توییتر",
        }
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("i18nextLng"),
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
