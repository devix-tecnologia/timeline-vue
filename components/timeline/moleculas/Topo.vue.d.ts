declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    titulo: {
        type: StringConstructor;
    };
    escuro: {
        type: BooleanConstructor;
        default: boolean;
    };
    link: {};
}, {
    emitirVoltarClick: (mouseEvent: MouseEvent) => void;
    classes: import('./vue/dist/vue.esm-bundler.js').ComputedRef<{
        'bg-escuro': boolean;
        'bg-claro': boolean;
    }>;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    voltarClick: (mouseEvent: MouseEvent) => true;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    titulo: {
        type: StringConstructor;
    };
    escuro: {
        type: BooleanConstructor;
        default: boolean;
    };
    link: {};
}>> & {
    onVoltarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}, {
    escuro: boolean;
}, {}>;
export default _default;
