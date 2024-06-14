
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
}, {
    emitirSalvarClick: (mouseEvent: MouseEvent) => void;
    emitirCancelarClick: (mouseEvent: MouseEvent) => void;
}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    salvarClick: (mouseEvent: MouseEvent) => true;
    cancelarClick: (mouseEvent: MouseEvent) => true;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
}>> & {
    onSalvarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    onCancelarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}, {
    salvarVisivel: boolean;
}, {}>;
export default _default;
