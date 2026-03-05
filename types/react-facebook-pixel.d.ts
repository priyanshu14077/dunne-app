declare module 'react-facebook-pixel' {
  export default class ReactPixel {
    static init(pixelId: string, advancedMatching?: object, options?: object): void;
    static pageView(): void;
    static track(title: string, data?: object): void;
    static trackCustom(event: string, data?: object): void;
    static trackSingle(pixelId: string, event: string, data?: object): void;
    static trackSingleCustom(pixelId: string, event: string, data?: object): void;
    static grantConsent(): void;
    static revokeConsent(): void;
    static fbq(...args: any[]): void;
  }
}
