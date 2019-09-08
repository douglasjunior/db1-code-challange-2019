//
//  MathModule.m
//  PrimeiroProjeto
//
//  Created by Douglas Nassif Roma Junior on 06/09/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "MathModule.h"

#import <React/RCTConvert.h>

@implementation MathModule

// To export a module named CalendarManager
RCT_EXPORT_MODULE(Math);

// This would name the module AwesomeCalendarManager instead
RCT_EXPORT_METHOD(sum: (NSInteger) numA
                  with: (NSInteger) numB
                  withResolver: (RCTPromiseResolveBlock) resolve
                  andRejecter: (RCTPromiseRejectBlock) reject)
{
  dispatch_sync(nil, ^{
    long result = numA + numB;
    resolve([NSNumber numberWithLong:result]);
  });
}

@end
