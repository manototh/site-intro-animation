# Intro SVG Animation for Websites

This tiny, fast, pure JavaScript solution enables you to display a short, customised animation while your website loads. It is particularly useful for large pages because this quick, low-resource animation entertains users for several seconds. All you need to do is to provide the tool with the SVG image that you want to animate.

## Example

To see the animation in action, go to [this fiddle](https://jsfiddle.net/manototh/d6xz38fm/) where the animation entertains you while a particularly large image loads in the background.

## Usage

To add intro SVG animation to your website, follow these steps:

1. Clone this repository.
2. Open the `source` folder, and copy the `site-intro-animation.js` file to your project.
3. In the `site-intro-animation.js` file, replace the value of the `svgSource` constant with the SVG image you want to animate. Surround the SVG code by backticks (`).
4. Optional: Change the value of the `animationDuration` constant to specify the duration of the animation in milliseconds.
5. Optional: Change the value of the `animationDuration` constant to specify the background colour of the animation using CSS standards.
6. In the page of your project where you want to add the animation, enter the following code at the end of the `<body>` tag.
    ```js
    <script src="site-intro-animation.js"></script>
    ```