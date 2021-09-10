# Debounce an event callback function

this demo is intended as an exercise to show how to debounce an input onchange event handler.  
over the exercise we provide 3 possible solutions using:

- useCallback
- useMemo
- useRef

The Data: we use real data but not fresh. Since the goal of the exercise is not  
about fetching data over the wire. What we did is get data from:  
coins data from coinlore api: https://api.coinlore.net/api/tickers/?start=0&limit=10  
Set a file for data: `src/coins.json` and import at [App.tsx](src/App.tsx)

What we expect is when we run the App

```bash
npm run dev
```

open **dev tools** and look for the log of the value of `event.target.value`  
with a **unbounced** callback you'll see a log for every single key pressed  
meanwhile with the **bounced** function it will "wait" this case 400ms until
emit.

## Unbounced

<div width="50%" margin="0 auto">
  <img src="screenshots/unbounced_callback_Peek%202021-09-10%2016-41.gif">
</div>

## Bounced

<div width="50%" margin="0 auto">
  <img src="screenshots/bounced_callback_Peek%202021-09-10%2016-43.gif">
</div>
