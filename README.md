# gpu-fu

Web**GPU** made easy: simple, composable **Functional Units**.

---

The aim of `gpu-fu` is to provide a set of design patterns for building reusable units of WebGPU functionality that can be easily chained and composed in an application. Each functional unit is a clean abstraction around a particular feature or behavior, designed to "do one thing, well", using lazy initialization patterns to efficiently construct resources and queue them to the GPU on demand during each frame of execution.

Additionally, `gpu-fu` provides a library of common functional units using these design patterns, so that you can get started quickly and have inspiration for building your own functionality as you encounter new needs.

The patterns of `gpu-fu` aren't designed to hide the details or get the way of writing low-level GPU code. It's fully expected that users of `gpu-fu` will often work at this level of detail. Instead, the goal is to help organize and structure your code in such a way that you can dive into the low-level details when needed, and then climb back out of the abstraction cleanly to wire everything together.

---

WebGPU is still in its infancy: unstable and incomplete at this time.

And so is `gpu-fu` - it's still being defined and built out.

As a consequence, usage in real-world applications is discouraged at this time, but if you're interested in collaborating on `gpu-fu`, new contributors are welcome! Reach out and file an issue ticket to discuss the feature you want to build.

Help shape the future of WebGPU applications!
