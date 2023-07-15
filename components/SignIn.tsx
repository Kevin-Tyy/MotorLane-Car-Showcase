"use client"
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import Logo from "./Logo";
interface Props {
	isOpen: boolean;
	closeModal: (value: any) => void;
}
const SignIn = ({ isOpen, closeModal }: Props) => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
    const [side, setSide] = useState(true)

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Perform login logic here
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};
    const switchSides = () => {
        setSide(!side);
    }
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-25 " />
					</Transition.Child>
					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="relative w-full max-w-md max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white dark:bg-neutral-800 p-2 text-left  shadow-xl transition-all flex flex-col gap-5">
									<button
										type="button"
										className="absolute top-2 right-2  z-10 w-fit p-2 bg-primary-blue-100 dark:bg-neutral-500 rounded-full"
										onClick={closeModal}>
										<Image
											src="/close.svg"
											alt="close"
											width={20}
											height={20}
										/>
									</button>
									<div>
										<form className="p-4 flex flex-col gap-8">
											<div className="text-center">
												<p className="text-slate-700 dark:text-slate-200">
                                                    {side ? 'Sign in to': 'Join'}
													&nbsp;&nbsp;
													<span className="font-black font-mono text-xl">
														MotorLane
													</span>
												</p>
											</div>
											<div className=" flex items-center bg-primary-blue-100 dark:bg-neutral-700 p-3 gap-2 rounded-lg">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="w-6 h-6">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
													/>
												</svg>

												<input
													type="email"
													id="email"
													className="w-full bg-transparent focus:outline-none"
													placeholder="email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													required
												/>
											</div>
                                            {!side && 
                                                <div className=" flex items-center bg-primary-blue-100 dark:bg-neutral-700 p-3 gap-2 rounded-lg">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                        />
                                                    </svg>

                                                    <input
                                                        type="text"
                                                        id="names"
                                                        className="w-full bg-transparent focus:outline-none"
                                                        placeholder="Your names"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            
                                            }
											<div className=" flex items-center bg-primary-blue-100 dark:bg-neutral-700 p-3 gap-2 rounded-lg">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="w-6 h-6">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
													/>
												</svg>

												<div className="relative w-full">
													<input
														type={showPassword ? "text" : "password"}
														id="password"
														className="w-full bg-transparent focus:outline-none"
														value={password}
														onChange={(e) => setPassword(e.target.value)}
														required
                                                        placeholder="Password"
													/>
													<button
														type="button"
														className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
														onClick={handleShowPassword}>
														{showPassword ? (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth={1.5}
																stroke="currentColor"
																className="w-6 h-6">
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
																/>
															</svg>
														) : (
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth={1.5}
																stroke="currentColor"
																className="w-6 h-6">
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
																/>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
																/>
															</svg>
														)}
													</button>
												</div>
											</div>
											<button
												type="submit"
												className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
												{side ? 'Login' : 'Register'}
											</button>
                                            <p className="text-center text-slate-700 dark:text-slate-200">{side ? "Don't" : 'Already ' }have an account? <span className="font-black cursor-pointer hover:underline" onClick={switchSides}>{side ? 'Join us' : 'Sign in'}</span></p>
										</form>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default SignIn;
