declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    hora: {
        required: true;
        type: DateConstructor;
    };
    aparencia: {
        type: StringConstructor;
        default: string;
        validator(aparencia: string): boolean;
    };
}, {
    horas: import('../../../../vue/dist/vue.esm-bundler.js').Ref<Date>;
    classes: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    hora: {
        required: true;
        type: DateConstructor;
    };
    aparencia: {
        type: StringConstructor;
        default: string;
        validator(aparencia: string): boolean;
    };
}>>, {
    aparencia: string;
}, {}>;
export default _default;
