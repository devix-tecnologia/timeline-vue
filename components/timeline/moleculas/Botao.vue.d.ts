import { PropType } from 'vue';
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
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
        type: PropType<Aparencia>;
        default: Aparencia;
    };
    tamanho: {
        type: PropType<Tamanho>;
        default: Tamanho;
    };
}>> & Readonly<{
    onClick?: ((mouseEvent: MouseEvent) => any) | undefined;
}>, {
    titulo: string;
    aparencia: Aparencia;
    tamanho: Tamanho;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
