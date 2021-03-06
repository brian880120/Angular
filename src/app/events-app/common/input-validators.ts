import { FormControl } from '@angular/forms';

export const restrictedWords = (words?: string[]) => {
    return (control: FormControl) => {
        if (!words) {
            return null;
        }

        var invalidWords =
            words.map(w => control.value.includes(w) ? w : null)
                .filter(w => w != null);

        return invalidWords && invalidWords.length ?
            {'restrictedWords': invalidWords.join(', ')} :
            null;
    };
}