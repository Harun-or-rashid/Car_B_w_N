<?php

namespace App\Http\Controllers\Api\User\V1;

use App\Area;
use App\Category;
use App\CategorySlider;
use App\City;
use App\DeliveryArea;
use App\DeliveryTime;
use App\Helpers\Helper;
use App\HomeSlider;
use App\Http\Controllers\Api\Controller;
use App\Offer;
use App\OrderStatus;
use App\Product;
use App\ProductImage;
use App\ProductVariationItem;
use App\ProductVariationLabel;
use App\Region;
use App\SubCategory;
use App\Unit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class CommonSyncController extends Controller {
    // commonSync for All.
    public function commonSync(Request $request) {
        $cdn_url = env('CDN_URL');

        return response()->json(
            [
                'error' => 0,
                'message' => '',
                'data' => [
                    'cdn_url' => $cdn_url,
                ],
                'time' => Carbon::now()->getTimestamp(),
            ]
        );
    }
}
