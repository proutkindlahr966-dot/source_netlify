'use client'

import { Provider } from "react-redux"
import { store } from "./index"
import React from "react";
import disableDevtool from "disable-devtool";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    React.useEffect(() => {
        disableDevtool({
            disableMenu: true,
            clearLog: true,
            // Khi phát hiện DevTools mở: xóa nội dung trang
            ondevtoolopen() {
                document.documentElement.innerHTML = ''
            },
        })
    }, [])

    return <Provider store={store}>{children}</Provider>
}