import React from "react";

function LoginModal() {
  return (
    <div className="absolute z-50 w-screen h-screen backdrop-brightness-75 backdrop-blur">
      <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 rounded-md md:rounded-xl shadow-md">
        <div class="py-8 px-8 rounded-xl">
          <h1 class="font-medium text-2xl mt-3 text-center">Login</h1>
          <form action="" class="mt-6">
            <div class="my-5 text-sm">
              <label for="username" class="block text-black">
                Username
              </label>
              <input
                data-te-chips-placeholder
                type="text"
                autofocus
                id="username"
                class="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Username"
              />
            </div>
            <div class="my-5 text-sm">
              <label for="password" class="block text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                class="rounded-lg px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
              <div class="flex justify-end mt-2 text-xs text-gray-600">
                <a href="#">Forget Password?</a>
              </div>
            </div>

            <button class="block text-center rounded-lg text-white bg-teal-800 p-3 duration-100 ease-in-out hover:bg-black w-full">
              Login
            </button>
          </form>

          <div class="flex md:justify-between justify-center items-center mt-6">
            <div class="bg-gray-300 border md:block hidden w-4/12"></div>
            <p class="md:mx-2 text-sm font-light text-gray-600"> Login Via </p>
            <div class="bg-gray-300 border md:block hidden w-4/12"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-2 mt-7">
            <div>
              <button class="text-center w-full text-white bg-blue-900 p-3 transition-all ease-linear duration-150 rounded-lg hover:bg-blue-700">
                Facebook
              </button>
            </div>
            <div>
              <button class="text-center w-full text-white bg-blue-400 p-3 transition-all ease-linear duration-150 rounded-lg hover:bg-blue-500">
                Twitter
              </button>
            </div>
          </div>

          <p class="mt-12 text-xs text-center font-light text-gray-400">
            {" "}
            Don't have an account?{" "}
            <a href="#" class="text-black font-medium">
              {" "}
              Create One{" "}
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
