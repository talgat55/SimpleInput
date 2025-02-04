import { TMaskConfig } from "./types";
declare class SimpleInputMask {
    private mask;
    private inputElement;
    private onCompleteCallback?;
    constructor(config: TMaskConfig);
    private applyMask;
    private isComplete;
    private setCursorPosition;
    private findNextPlaceholderPosition;
    attach(input: HTMLInputElement): void;
    detach(): void;
}
export default SimpleInputMask;
