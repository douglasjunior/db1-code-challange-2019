package com.primeiroprojeto;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class MathModule extends ReactContextBaseJavaModule {

    public MathModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void sum(int numA, int numB, Promise promise) {
        int result = numA + numB;
        promise.resolve(result);
    }

    @Nonnull
    @Override
    public String getName() {
        return "Math";
    }

}
