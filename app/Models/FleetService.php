<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class FleetService
 * 
 * @property int $id
 * @property int $service_attributes_id
 * @property int $fleet_id
 * @property float $value
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property ServiceAttribute $service_attribute
 * @property Fleet $fleet
 * @property User|null $user
 *
 * @package App\Models
 */
class FleetService extends Model
{
	protected $table = 'fleet_services';
	protected $perPage = 10;

	protected $casts = [
		'service_attributes_id' => 'int',
		'fleet_id' => 'int',
		'value' => 'float',
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'service_attributes_id',
		'fleet_id',
		'value'
	];

	public function service_attribute()
	{
		return $this->belongsTo(ServiceAttribute::class, 'service_attributes_id');
	}

	public function fleet()
	{
		return $this->belongsTo(Fleet::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}
}
