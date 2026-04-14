import { Injectable } from '@angular/core';
import { interval, from, timer, concat, of, Observable } from 'rxjs';
import { concatMap, delay, map, repeat, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Typewriter {
  getTypewriterEffect(phrases: string[], startDelay: number = 2000): Observable<string> {
    return concat(
      of(phrases[0]),
      timer(startDelay).pipe(
        concatMap(() => from(phrases).pipe(
          concatMap((phrase, index) => {
            const nextIndex = (index + 1) % phrases.length;
            const nextPhrase = phrases[nextIndex];

            return concat(
              interval(40).pipe(
                map(i => phrase.substring(0, phrase.length - i - 1)),
                take(phrase.length + 1)
              ),
              interval(70).pipe(
                map(i => nextPhrase.substring(0, i + 1)),
                take(nextPhrase.length)
              ),
              of(nextPhrase).pipe(delay(2000))
            );
          }),
          repeat()
        ))
      )
    );
  }
}
