"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSavvyCal = exports.SavvyCalProvider = void 0;
var react_1 = __importStar(require("react"));
var react_script_hook_1 = __importDefault(require("react-script-hook"));
var SavvyCalContext = react_1.default.createContext({});
function SavvyCalProvider(props) {
    var children = props.children;
    var value = useProvider();
    return (react_1.default.createElement(SavvyCalContext.Provider, { value: value }, children));
}
exports.SavvyCalProvider = SavvyCalProvider;
var useSavvyCal = function () {
    // @ts-ignore
    return react_1.default.useContext(SavvyCalContext);
};
exports.useSavvyCal = useSavvyCal;
function useProvider() {
    var _a = react_1.useState(false), isLoaded = _a[0], setLoaded = _a[1];
    // const [instance, setInstance] = useState(null)
    var _b = react_script_hook_1.default({
        src: "https://embed.savvycal.com/v1/embed.js",
    }), loading = _b[0], error = _b[1];
    react_1.useEffect(function () {
        if (loading === false) {
            setLoaded(true);
            // @ts-ignore
            window.SavvyCal("init");
        }
    }, [loading]);
    var open = function (opts) {
        // @ts-ignore
        window.SavvyCal("open", opts);
    };
    return {
        isLoaded: isLoaded,
        error: error,
        open: open,
    };
}
