declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
    observacao: {
        type: StringConstructor;
    };
}, {
    salvar: (mouseEvent: MouseEvent) => void;
    cancelar: (mouseEvent: MouseEvent) => void;
    state: import('./vue/dist/vue.esm-bundler.js').Ref<{
        observacaoLocal: string;
    }>;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    adicionarClick: (mensagem: string, mouseEvent: MouseEvent) => true;
    cancelarClick: (mouseEvent: MouseEvent) => true;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
    observacao: {
        type: StringConstructor;
    };
}>> & {
    onCancelarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    onAdicionarClick?: ((mensagem: string, mouseEvent: MouseEvent) => any) | undefined;
}, {
    salvarVisivel: boolean;
}, {}>;
export default _default;
