declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
}>, {
    classes: import('vue').ComputedRef<{
        [x: string]: boolean;
        "bg-escuro": boolean;
        "bg-claro": boolean;
    }>;
    style: import('vue').ComputedRef<{
        borderColor: string | undefined;
        backgroundColor: string | undefined;
    }>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
}>> & Readonly<{}>, {
    escuro: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
