import React from 'react'
import animate from 'animejs'

class Component extends React.Component {

  componentDidMount() {
    var timeline = animate.timeline({ autoplay: true, direction: 'alternate', loop: true, easing: 'spring(1, 80, 10, 0)' })
    timeline.add({
      targets: ['#EyeRight', '#EyeLeft'],
      translateX: [
        { value: 10, duration: 1000, delay: 500 },
        { value: 0, duration: 1000 },
        { value: -10, duration: 1000 },
        { value: 0, duration: 1000 },
      ]
    })
    timeline.add({
      targets: ['#Mouth', '#Tongue'],
      translateY: [
        {value: -7, duration: 600},
        {value: 0, duration: 300}
      ]
    })
  }

  render() {
    const { color } = this.props.state.GLOBAL.model.fox
    return (
      <div>
        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="fox 1">
          <g id="EarRight">
          <path id="Vector" d="M400.206 58.5183C408.922 55.1886 418.289 61.7656 417.884 71.0872C414.615 146.213 388.755 210.975 388.755 210.975L291.078 142.439C330.021 95.5341 377.145 67.3286 400.206 58.5183Z" fill={color.ear.primary}/>
          <path id="Vector_2" d="M323.637 165.285C349.02 123.947 387.305 84.4779 399.426 77.436C404.34 74.5815 408.655 81.5655 407.555 90.771C401.701 139.767 391.083 183.774 384.544 208.021L323.637 165.285Z" fill={color.ear.secondary}/>
          </g>
          <g id="EarLeft">
          <path id="Vector_3" d="M111.794 58.5183C103.078 55.1886 93.7108 61.7656 94.1162 71.0872C97.3847 146.213 123.245 210.975 123.245 210.975L220.922 142.439C181.979 95.5341 134.855 67.3286 111.794 58.5183Z" fill={color.ear.primary}/>
          <path id="Vector_4" d="M188.363 165.285C162.98 123.947 124.695 84.4779 112.574 77.436C107.66 74.5815 103.345 81.5655 104.446 90.771C110.299 139.767 120.917 183.774 127.456 208.021L188.363 165.285Z" fill={color.ear.secondary}/>
          </g>
          <g id="Mouth">
          <path id="Vector_5" d="M256 454.359C277.459 454.359 294.855 442.763 294.855 428.458C294.855 414.153 277.459 402.556 256 402.556C234.541 402.556 217.145 414.153 217.145 428.458C217.145 442.763 234.541 454.359 256 454.359Z" fill={color.faceContent.primary}/>
          <path id="Vector_6" d="M210.669 421.98C165.339 396.077 90.24 367.875 90.24 367.875L97.4467 346.254C94.4087 344.811 73.5973 344.539 55.2497 350.745L74.6771 318.366H210.669V421.98Z" fill={color.faceContent.secondary || color.default.primary}/>
          <path id="Vector_7" d="M301.331 421.98C346.661 396.076 421.76 367.875 421.76 367.875L414.553 346.254C417.591 344.811 438.403 344.539 456.75 350.745L437.323 318.366H301.331V421.98Z" fill={color.faceContent.secondary || color.default.primary}/>
          </g>
          <g id="FaceBackground">
          <path id="FaceBackground_2" d="M256 130.568C350.398 130.568 431.434 225.148 456.459 349.284C456.557 349.771 456.655 350.258 456.751 350.746C456.751 350.746 408.992 301.367 357.185 327.676C337.973 337.432 328.853 358.867 328.853 382.29C328.853 421.126 297.722 442.614 260.841 427.687C257.714 426.421 254.285 426.421 251.158 427.687C214.277 442.615 183.146 421.126 183.146 382.29C183.146 358.867 174.025 337.432 154.814 327.676C103.008 301.367 55.2489 350.746 55.2489 350.746C55.3454 350.258 55.4426 349.771 55.5406 349.284C80.5655 225.147 161.602 130.568 256 130.568Z" fill={color.faceBackground.primary}/>
          <path id="Vector_8" d="M256 130.568L243.407 131.197C154.465 139.168 79.4441 230.709 55.5406 349.283C55.4426 349.77 55.3454 350.257 55.2489 350.745C55.2489 350.745 93.7924 310.935 139.185 321.9C144.861 160.617 245.459 130.568 256 130.568Z" fill={color.faceBackground.secondary}/>
          </g>
          <g id="EyeLeft">
          <path id="Vector_9" d="M188.003 311.89C175.537 311.89 165.338 301.691 165.338 289.225V276.274C165.338 263.807 175.537 253.608 188.003 253.608C200.47 253.608 210.669 263.807 210.669 276.274V289.225C210.669 301.691 200.47 311.89 188.003 311.89Z" fill="#4B3F4E"/>
          <path id="Vector_10" d="M188.003 253.608C186.895 253.608 185.832 253.782 184.766 253.937V285.987C184.766 293.14 190.565 298.939 197.717 298.939C204.87 298.939 210.669 293.14 210.669 285.987V276.274C210.669 263.807 200.47 253.608 188.003 253.608Z" fill="#5D5360"/>
          <path id="Vector_11" d="M188.003 279.515C193.368 279.515 197.717 275.166 197.717 269.802C197.717 264.437 193.368 260.088 188.003 260.088C182.639 260.088 178.29 264.437 178.29 269.802C178.29 275.166 182.639 279.515 188.003 279.515Z" fill="white"/>
          </g>
          <g id="EyeRight">
          <path id="Vector_12" d="M323.997 311.89C311.53 311.89 301.331 301.691 301.331 289.225V276.274C301.331 263.807 311.53 253.608 323.997 253.608C336.463 253.608 346.662 263.807 346.662 276.274V289.225C346.662 301.691 336.462 311.89 323.997 311.89Z" fill="#4B3F4E"/>
          <path id="Vector_13" d="M323.997 253.608C322.889 253.608 321.825 253.782 320.759 253.937V285.987C320.759 293.14 326.558 298.939 333.71 298.939C340.864 298.939 346.662 293.14 346.662 285.987V276.274C346.662 263.807 336.462 253.608 323.997 253.608Z" fill="#5D5360"/>
          <path id="Vector_14" d="M323.997 279.515C329.361 279.515 333.71 275.166 333.71 269.802C333.71 264.437 329.361 260.088 323.997 260.088C318.632 260.088 314.283 264.437 314.283 269.802C314.283 275.166 318.632 279.515 323.997 279.515Z" fill="white"/>
          </g>
          <g id="Nose">
          <path id="BottomNose" d="M249.524 428.284C250.085 428.073 250.646 427.856 251.209 427.632C254.284 426.408 257.717 426.408 260.791 427.632C261.354 427.856 261.916 428.073 262.477 428.284V402.552H249.525L249.524 428.284Z" fill={color.faceBackground.secondary}/>
          <path id="Vector_15" d="M255.626 363.698C270.139 363.698 281.904 373.313 281.904 385.176C281.904 396.615 270.86 402.639 262.89 407.093C258.269 409.674 252.983 409.674 248.363 407.093C240.392 402.639 229.349 396.615 229.349 385.176C229.348 373.313 241.113 363.698 255.626 363.698Z" fill={color.nose.primary}/>
          <path id="Vector_16" d="M262.063 406.538C254.092 400.812 243.048 393.068 243.048 378.359C243.048 373.539 244.328 369.076 246.394 365.132C236.453 368.194 229.348 375.979 229.348 385.175C229.348 396.614 240.392 402.638 248.362 407.092C252.982 409.673 258.269 409.673 262.889 407.092C262.924 407.072 262.964 407.05 263 407.029C262.691 406.84 262.366 406.757 262.063 406.538Z" fill={color.nose.secondary}/>
          </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default Component