import { of } from 'rxjs';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of(true),
      close() {}
    };
  }
}

export function matDialogRefMockFactory({ result }: { result: any }) {
  return {
    afterClosed: () => of(result),
    close: () => {}
  };
}
