import Auth from './components/auth';
import AvatarList from './components/avatar-list';
import Calendar from './components/calendar';
import City from './components/city';
import Copy from './components/copy';
import CountDown from './components/count-down';
import CountUp from './components/count-up';
import DescriptionList from './components/description-list';
import Ellipsis from './components/ellipsis';
import Exception from './components/exception';
import FooterToolbar from './components/footer-toolbar';
import GlobalFooter from './components/global-footer';
import Grid from './components/grid';
import Login from './components/login';
import Notification from './components/notification';
import NumberInfo from './components/number-info';
import Numeral from './components/numeral';
import PageHeader from './components/page-header';
import Result from './components/result';
import ScrollIntoView from './components/scroll-into-view';
import ScrollTop from './components/scroll-top';
import TablePaste from './components/table-paste';
import TagSelect from './components/tag-select';
import TreeSelect from './components/tree-select';
import Trend from './components/trend';
import WordCount from './components/word-count';

import locale from './locale/index';

// directives
import lineClamp from './directives/line-clamp';
import resize from './directives/resize';
import style from './directives/style';

// filters
import date from './filters/date';

// libraries
import dayjs from 'dayjs';

const components = {
    Auth,
    AvatarList,
    Calendar,
    Captcha: Login.Captcha,
    City,
    CountDown,
    CountUp,
    Description: DescriptionList.Description,
    DescriptionList,
    Ellipsis,
    Email: Login.Email,
    Exception,
    FooterToolbar,
    GlobalFooter,
    Grid,
    GridItem: Grid.Item,
    Login: Login,
    Mobile: Login.Mobile,
    Notification,
    NotificationItem: Notification.Item,
    NotificationTab: Notification.Tab,
    NumberInfo,
    Numeral,
    PageHeader,
    Password: Login.Password,
    Result,
    Submit: Login.Submit,
    TablePaste,
    TagSelect,
    TagSelectOption: TagSelect.Option,
    TreeSelect,
    Trend,
    UserName: Login.UserName,
    WordCount
};

const iview_pro = {
    ...components
};

const directives = {
    display: style.display,
    width: style.width,
    height: style.height,
    margin: style.margin,
    padding: style.padding,
    font: style.font,
    color: style.color,
    'bg-color': style.bgColor,

    resize,
    'line-clamp': lineClamp
};

const filters = Object.assign({}, date);

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(iview_pro).forEach(key => {
        Vue.component(key, iview_pro[key]);
    });

    Object.keys(directives).forEach(key => {
        Vue.directive(key, directives[key]);
    });

    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key]);
    });

    Vue.prototype.$IVIEWPRO = {
        size: opts.size || '',
        transfer: 'transfer' in opts ? opts.transfer : ''
    };

    Vue.prototype.$Copy = Copy;
    Vue.prototype.$ScrollIntoView = ScrollIntoView;
    Vue.prototype.$ScrollTop = ScrollTop;
    Vue.prototype.$Date = dayjs;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    locale: locale.use,
    i18n: locale.i18n,
    install,
    ...components
};

API.lang = (code) => {
    const langObject = window['iview/locale'].default;
    if (code === langObject.i.locale) locale.use(langObject);
    else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
