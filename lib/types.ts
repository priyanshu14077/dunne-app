import { Charm } from "./mock-data";

export interface PlacedCharmInstance {
  id: string;
  charm: Charm;
  anchorIndex: number;
}

export interface DesignPreview {
  designId: string;
  cloudFrontUrl: string;
  captureTime: number; // milliseconds
  uploadTime: number; // milliseconds
}

export interface PreviewUploadError {
  stage: 'capture' | 'validation' | 'upload';
  message: string;
  code?: string;
  retryable: boolean;
}

export interface PreviewUploadOptions {
  canvasElement: HTMLElement;
  designId: string;
  onProgress?: (stage: 'capturing' | 'uploading') => void;
}

export interface PreviewUploadResult {
  success: boolean;
  data?: DesignPreview;
  error?: PreviewUploadError;
}
