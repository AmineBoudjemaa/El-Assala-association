import {useEventListener} from "./customHooks";

export function useClickOutside(ref, cb) {
  useEventListener(
    "click",
    (e) => {
      // console.log(ref.current.contains(e.target))
      if (ref.current == null || ref.current.contains(e.target)) return;
      cb(e);
    },
    document
  );
}
