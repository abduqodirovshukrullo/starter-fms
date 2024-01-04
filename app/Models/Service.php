<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Service
 * 
 * @property int $id
 * @property string $name
 * @property int|null $created_by
 * @property int|null $updated_by
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property User|null $user
 * @property Collection|ServiceAttribute[] $service_attributes
 *
 * @package App\Models
 */
class Service extends Model
{
	protected $table = 'services';
	protected $perPage = 10;

	protected $casts = [
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'name'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}

	public function service_attributes()
	{
		return $this->hasMany(ServiceAttribute::class);
	}
}
