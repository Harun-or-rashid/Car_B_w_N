<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OptionCategory extends Model
{
    use HasFactory;

    protected $fillable = ['category_id', 'option_id', 'status'];

    public function option()
    {
        return $this->belongsTo(Option::class);
    }

    public function categoryOptionItems()
    {
        return $this->hasMany(CategoryOptionItem::class, 'option_category_id');
    }
}
