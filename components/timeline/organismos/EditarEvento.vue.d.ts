declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
}>, {
    emitirSalvarClick: (mouseEvent: MouseEvent) => void;
    emitirCancelarClick: (mouseEvent: MouseEvent) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    salvarClick: (mouseEvent: MouseEvent) => true;
    cancelarClick: (mouseEvent: MouseEvent) => true;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    salvarVisivel: {
        type: BooleanConstructor;
    };
}>> & Readonly<{
    onSalvarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
    onCancelarClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}>, {
    salvarVisivel: boolean;
}, {}, {
    AreaSalvamento: import('vue').DefineComponent<{}, {
        emitirSalvarClick: (mouseEvent: MouseEvent) => void;
        emitirCancelarClick: (mouseEvent: MouseEvent) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        salvarClick: (_mouseEvent: MouseEvent) => true;
        cancelarClick: (_mouseEvent: MouseEvent) => true;
    }, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
        onSalvarClick?: ((_mouseEvent: MouseEvent) => any) | undefined;
        onCancelarClick?: ((_mouseEvent: MouseEvent) => any) | undefined;
    }>, {}, {}, {
        Botao: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
            titulo: {
                type: StringConstructor;
                default: string;
            };
            icone: {
                type: StringConstructor;
            };
            aparencia: {
                type: import('vue').PropType<import('../moleculas/Botao.vue').Aparencia>;
                default: import('../moleculas/Botao.vue').Aparencia;
            };
            tamanho: {
                type: import('vue').PropType<import('../moleculas/Botao.vue').Tamanho>;
                default: import('../moleculas/Botao.vue').Tamanho;
            };
        }>, {
            handleClick: (mouseEvent: MouseEvent) => void;
            classes: import('vue').ComputedRef<{
                [x: string]: boolean;
            }>;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            click: (mouseEvent: MouseEvent) => true;
        }, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            titulo: {
                type: StringConstructor;
                default: string;
            };
            icone: {
                type: StringConstructor;
            };
            aparencia: {
                type: import('vue').PropType<import('../moleculas/Botao.vue').Aparencia>;
                default: import('../moleculas/Botao.vue').Aparencia;
            };
            tamanho: {
                type: import('vue').PropType<import('../moleculas/Botao.vue').Tamanho>;
                default: import('../moleculas/Botao.vue').Tamanho;
            };
        }>> & Readonly<{
            onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
        }>, {
            titulo: string;
            aparencia: import('../moleculas/Botao.vue').Aparencia;
            tamanho: import('../moleculas/Botao.vue').Tamanho;
        }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
