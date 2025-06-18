package com.mola_app.app

import android.graphics.Color
import android.os.Bundle
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen

class MainActivity : TauriActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    installSplashScreen()
    super.onCreate(savedInstanceState)
    window.statusBarColor = Color.rgb(242,242, 242)
  }
}
