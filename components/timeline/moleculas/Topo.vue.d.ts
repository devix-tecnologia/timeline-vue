declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    titulo: {
        type: StringConstructor;
    };
    escuro: {
        type: BooleanConstructor;
        default: boolean;
    };
    link: {};
}>, {
    emitirVoltarClick: (mouseEvent: MouseEvent) => void;
    classes: import('vue').ComputedRef<{
        'bg-escuro': boolean;
        'bg-claro': boolean;
    }>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    voltarClick: (mouseEvent: MouseEvent) => true;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    titulo: {
        type: StringConstructor;
    };
    escuro: {
        type: BooleanConstructor;
        default: boolean;
    };
    link: {};
}>> & Readonly<{
    onVoltarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}>, {
    escuro: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
