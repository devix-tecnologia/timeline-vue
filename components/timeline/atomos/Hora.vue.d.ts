declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
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
    horas: import('./vue/dist/vue.esm-bundler.js').Ref<{
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number | undefined) => number;
        setUTCSeconds: (sec: number, ms?: number | undefined) => number;
        setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number | undefined) => number;
        setUTCMonth: (month: number, date?: number | undefined) => number;
        setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    }>;
    classes: import('./vue/dist/vue.esm-bundler.js').ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
