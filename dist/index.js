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
const react_1 = __importStar(require("react"));
const react_script_hook_1 = __importDefault(require("react-script-hook"));
const SavvyCalContext = react_1.createContext({});
function SavvyCalProvider(props) {
    const { children } = props;
    const value = useProvider();
    return (react_1.default.createElement(SavvyCalContext.Provider, { value: value }, children));
}
exports.SavvyCalProvider = SavvyCalProvider;
const useSavvyCal = () => {
    return react_1.default.useContext(SavvyCalContext);
};
exports.useSavvyCal = useSavvyCal;
function useProvider() {
    const [isLoaded, setLoaded] = react_1.useState(false);
    const [loading, error] = react_script_hook_1.default({
        src: "https://embed.savvycal.com/v1/embed.js",
    });
    react_1.useEffect(() => {
        if (loading === false) {
            setLoaded(true);
            window.SavvyCal("init");
        }
    }, [loading]);
    const open = (opts) => {
        window.SavvyCal("open", opts);
    };
    return {
        isLoaded,
        error,
        open,
    };
}
//# sourceMappingURL=index.js.map