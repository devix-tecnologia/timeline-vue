import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';

export type Tamanho = 'pequeno' | 'medio' | 'grande';
export type Aparencia = 'outline' | 'preenchido' | 'vazio';
export declare const Tamanhos: {
    PEQUENO: Tamanho;
    MEDIO: Tamanho;
    GRANDE: Tamanho;
};
export declare const Aparencias: {
    OUTLINE: Aparencia;
    PREENCHIDO: Aparencia;
    VAZIO: Aparencia;
};
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    titulo: {
        type: StringConstructor;
        default: string;
    };
    icone: {
        type: StringConstructor;
    };
    aparencia: {
        type: PropType<Aparencia>;
        default: Aparencia;
    };
    tamanho: {
        type: PropType<Tamanho>;
        default: Tamanho;
    };
}, {
    handleClick: (mouseEvent: MouseEvent) => void;
    classes: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    click: (mouseEvent: MouseEvent) => true;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    titulo: {
        type: StringConstructor;
        default: string;
    };
    icone: {
        type: StringConstructor;
    };
    aparencia: {
        type: PropType<Aparencia>;
        default: Aparencia;
    };
    tamanho: {
        type: PropType<Tamanho>;
        default: Tamanho;
    };
}>> & {
    onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}, {
    aparencia: Aparencia;
    titulo: string;
    tamanho: Tamanho;
}, {}>;
export default _default;
