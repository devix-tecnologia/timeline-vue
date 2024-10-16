import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    horaPrevista: {
        type: DateConstructor;
        required: true;
    };
    horaRealizada: {
        required: false;
        type: PropType<Date | null>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    horaPrevista: {
        type: DateConstructor;
        required: true;
    };
    horaRealizada: {
        required: false;
        type: PropType<Date | null>;
    };
}>> & Readonly<{}>, {}, {}, {
    Hora: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        hora: {
            required: true;
            type: DateConstructor;
        };
        aparencia: {
            type: StringConstructor;
            default: string;
            validator(aparencia: string): boolean;
        };
    }>, {
        horas: import('vue').Ref<Date, Date>;
        classes: import('vue').ComputedRef<{
            [x: string]: boolean;
        }>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        hora: {
            required: true;
            type: DateConstructor;
        };
        aparencia: {
            type: StringConstructor;
            default: string;
            validator(aparencia: string): boolean;
        };
    }>> & Readonly<{}>, {
        aparencia: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
