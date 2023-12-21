declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    iconeCategoria: {
        type: StringConstructor;
        required: true;
    };
    categoria: {
        type: StringConstructor;
    };
    escuro: {
        type: BooleanConstructor;
        default: boolean;
    };
    tipo: {
        type: StringConstructor;
    };
    borderColor: {
        type: StringConstructor;
    };
    backgroundColor: {
        type: StringConstructor;
    };
}, {
    classes: import('./vue/dist/vue.esm-bundler.js').ComputedRef<{
        [x: string]: boolean;
        "bg-escuro": boolean;
        "bg-claro": boolean;
    }>;
    style: import('./vue/dist/vue.esm-bundler.js').ComputedRef<{
        borderColor: string | undefined;
        backgroundColor: string | undefined;
    }>;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    iconeCategoria: {
        type: StringConstructor;
        required: true;
    };
    categoria: {
        type: StringConstructor;
    };
    escuro: {
        type: BooleanConstructor;
        default: boolean;
    };
    tipo: {
        type: StringConstructor;
    };
    borderColor: {
        type: StringConstructor;
    };
    backgroundColor: {
        type: StringConstructor;
    };
}>>, {
    escuro: boolean;
}, {}>;
export default _default;
