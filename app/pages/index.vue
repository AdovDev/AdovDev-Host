<template>
  <div class="bgFonDev lg:mx-30 text-white light:bgFon">
    <!-- Header Component -->
    <HeaderComponent />
    <!--Dark Mode Button-->
    <DarkModeButton />
    <!-- Main Content -->
    <main class="flex flex-col">
      <!-- Hero Section -->
      <section class="flex flex-col items-center">
        <div
          class="container mx-auto justify-between px-6 flex flex-col gap-12 items-center"
        >
          <!-- Hero Content - 3D Object -->
          <div class="flex container flex-col justify-center lg:gap-15 lg:my-25 items-center">
            <svg
              width="626"
              height="626"
              viewBox="0 0 626 626"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_31_41)">
                <path
                  d="M25.9563 334.821C15.7793 322.59 15.7794 304.838 25.9563 292.607L103.839 199.004C106.242 196.116 108.135 192.838 109.434 189.312L151.556 75.0624C157.06 60.1333 172.433 51.2576 188.114 53.9555L308.118 74.6024C311.821 75.2395 315.606 75.2395 319.309 74.6024L439.313 53.9555C454.994 51.2576 470.367 60.1334 475.871 75.0624L517.993 189.312C519.293 192.838 521.185 196.116 523.588 199.004L601.471 292.607C611.648 304.838 611.648 322.59 601.471 334.821L523.588 428.424C521.185 431.313 519.293 434.59 517.993 438.116L475.871 552.366C470.367 567.295 454.994 576.171 439.313 573.473L319.309 552.826C315.606 552.189 311.821 552.189 308.118 552.826L188.114 573.473C172.433 576.171 157.06 567.295 151.556 552.366L109.434 438.116C108.135 434.59 106.242 431.313 103.839 428.424L25.9563 334.821Z"
                  fill="#DB4747"
                  fill-opacity="0.25"
                  shape-rendering="crispEdges"
                />
              </g>
              <g filter="url(#filter1_d_31_41)">
                <path
                  d="M58.4188 368.622C46.732 357.825 44.4144 340.225 52.9073 326.77L110.461 235.589C112.467 232.411 113.915 228.915 114.743 225.25L138.514 120.076C142.022 104.557 156.105 93.7496 172.004 94.3771L279.746 98.6297C283.501 98.7779 287.253 98.2838 290.841 97.1686L393.809 65.1683C409.004 60.4461 425.404 67.2388 432.81 81.3215L482.999 176.755C484.748 180.081 487.052 183.083 489.812 185.633L569.009 258.806C580.696 269.604 583.013 287.204 574.52 300.659L516.966 391.84C514.961 395.017 513.512 398.514 512.684 402.179L488.913 507.352C485.405 522.872 471.323 533.679 455.424 533.051L347.681 528.799C343.927 528.651 340.174 529.145 336.586 530.26L233.618 562.26C218.424 566.982 202.023 560.19 194.617 546.107L144.429 450.673C142.68 447.348 140.376 444.345 137.616 441.795L58.4188 368.622Z"
                  fill="#DB4747"
                  fill-opacity="0.25"
                  shape-rendering="crispEdges"
                />
              </g>
              <g filter="url(#filter2_d_31_41)">
                <path
                  d="M89.1913 395.501C76.1701 386.357 71.5283 369.223 78.1528 354.756L118.254 267.183C119.818 263.767 120.787 260.109 121.12 256.366L129.647 160.427C131.056 144.578 143.574 131.991 159.414 130.494L255.305 121.436C259.046 121.083 262.699 120.093 266.107 118.51L353.456 77.9253C367.886 71.2209 385.045 75.7678 394.262 88.7382L450.052 167.253C452.228 170.316 454.912 172.985 457.987 175.144L536.809 230.499C549.83 239.643 554.472 256.777 547.847 271.244L507.746 358.817C506.182 362.233 505.213 365.891 504.88 369.634L496.353 465.573C494.944 481.422 482.426 494.009 466.586 495.506L370.695 504.564C366.954 504.917 363.301 505.907 359.893 507.49L272.544 548.075C258.114 554.779 240.955 550.232 231.738 537.262L175.949 458.747C173.772 455.684 171.088 453.015 168.013 450.856L89.1913 395.501Z"
                  fill="#DB4747"
                  fill-opacity="0.25"
                  shape-rendering="crispEdges"
                />
              </g>
              <g filter="url(#filter3_d_31_41)">
                <path
                  d="M126.403 418.715C112.194 411.553 105.119 395.272 109.579 379.998L133.196 299.103C134.249 295.496 134.678 291.736 134.465 287.984L129.688 203.847C128.786 187.961 139.348 173.694 154.805 169.919L236.671 149.924C240.321 149.033 243.793 147.524 246.935 145.464L317.411 99.2586C330.718 90.5346 348.355 92.548 359.353 104.047L417.602 164.947C420.199 167.663 423.241 169.915 426.596 171.606L501.849 209.537C516.058 216.699 523.133 232.98 518.673 248.254L495.056 329.149C494.003 332.756 493.574 336.516 493.787 340.268L498.564 424.405C499.466 440.291 488.904 454.558 473.447 458.333L391.581 478.328C387.93 479.219 384.459 480.728 381.317 482.788L310.841 528.993C297.534 537.717 279.897 535.704 268.899 524.205L210.65 463.305C208.053 460.589 205.011 458.337 201.656 456.646L126.403 418.715Z"
                  fill="#DB4747"
                  fill-opacity="0.25"
                  shape-rendering="crispEdges"
                />
              </g>
              <g filter="url(#filter4_d_31_41)">
                <path
                  d="M218.99 391.763C204.061 386.259 195.185 370.886 197.883 355.205L204.169 318.668C204.807 314.965 204.807 311.18 204.169 307.477L197.883 270.94C195.185 255.259 204.061 239.886 218.99 234.382L253.775 221.557C257.301 220.258 260.578 218.365 263.467 215.962L291.966 192.249C304.197 182.072 321.948 182.072 334.18 192.249L362.678 215.962C365.567 218.365 368.845 220.258 372.37 221.557L407.155 234.382C422.084 239.886 430.96 255.259 428.262 270.94L421.976 307.477C421.339 311.18 421.339 314.965 421.976 318.668L428.262 355.205C430.96 370.886 422.084 386.259 407.155 391.763L372.37 404.588C368.845 405.888 365.567 407.78 362.678 410.183L334.18 433.896C321.948 444.073 304.197 444.073 291.966 433.896L263.467 410.183C260.578 407.78 257.301 405.888 253.775 404.588L218.99 391.763Z"
                  fill="#EA7575"
                  fill-opacity="0.25"
                  shape-rendering="crispEdges"
                />
              </g>
              <g filter="url(#filter5_d_31_41)">
                <path
                  d="M287.924 241.557C302.182 228.732 323.818 228.732 338.076 241.557L342.809 245.814C346.706 249.32 351.296 251.969 356.281 253.592L362.334 255.562C380.569 261.497 391.388 280.235 387.41 298.995L386.089 305.222C385.002 310.35 385.002 315.65 386.089 320.778L387.41 327.005C391.388 345.765 380.569 364.503 362.334 370.438L356.281 372.408C351.296 374.031 346.706 376.68 342.809 380.186L338.076 384.443C323.818 397.268 302.182 397.268 287.924 384.443L283.191 380.186C279.294 376.68 274.704 374.031 269.719 372.408L263.666 370.438C245.431 364.503 234.612 345.765 238.59 327.005L239.911 320.778C240.998 315.65 240.998 310.35 239.911 305.222L238.59 298.995C234.612 280.235 245.431 261.497 263.666 255.562L269.719 253.592C274.704 251.969 279.294 249.32 283.191 245.814L287.924 241.557Z"
                  fill="#DD7B7B"
                  fill-opacity="0.25"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_31_41"
                  x="8.32349"
                  y="43.4747"
                  width="610.78"
                  height="540.479"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_31_41"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_31_41"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_31_41"
                  x="37.8123"
                  y="53.6772"
                  width="551.803"
                  height="520.074"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_31_41"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_31_41"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_31_41"
                  x="65.1536"
                  y="64.8497"
                  width="495.693"
                  height="496.301"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_31_41"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_31_41"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_31_41"
                  x="98.252"
                  y="83.8554"
                  width="431.748"
                  height="460.541"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_31_41"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_31_41"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter4_d_31_41"
                  x="187.402"
                  y="174.617"
                  width="251.341"
                  height="276.912"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_31_41"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_31_41"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter5_d_31_41"
                  x="227.769"
                  y="221.938"
                  width="170.462"
                  height="182.124"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_31_41"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_31_41"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <!-- Brand Logos -->
            <div class="transform flex space-x-10 justify-between items-center">
              <div class="text-white font-bold text-lg">MONEY</div>
              <div class="text-white font-bold text-lg">QUO</div>
              <div class="text-white font-bold text-lg">L1s</div>
            </div>
          </div>
          <div class="space-y-8 flex">
            <!-- Left Content -->
            <div>
              <h1 class="text-[64px]  font-normal mb-6">
                Добро пожаловать в <span class="text-red-400 text-shadow-adov font-semibold">AdovDev</span>
              </h1>
              <p class="text-lg text-gray-300 leading-relaxed mb-8">
                Мы — команда профессиональных дизайнеров и разработчиков,
                которые специализируются на создании современных Веб - сайтов.
                Мы сосредоточены на предоставлении элегантных, вдохновляющих
                цифровых впечатлений, которые очаровывают и радуют наших
                клиентов
              </p>
              <button class="cursor-pointer border-2 px-3 py-2">
                Обсудим проект?
              </button>
            </div>

            <!-- Right Content -->
            <div class="space-y-4 flex flex-col right-0">
              <div class="">
                <h1>Проекты</h1>
                <h2>Наша талантливая команда дизайнеров и разработчиков стремится
                    обеспечить исключительные результаты для наших клиентов</h2>
                <button>Посмотреть проекты</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <ProjectsSection />

      <!-- Services Section -->
      <ServicesSection />

      <!-- Contact Form Section -->
      <ContactSection />
    </main>

    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script setup>
// Nuxt 4 setup
definePageMeta({
  title: "AdovDev - Студия веб-разработки",
});
</script>
