<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ActivityLog
 * 
 * @property int $id
 * @property int $fleet_activity_id
 * @property int $status
 * @property string $description
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property FleetActivity $fleet_activity
 * @property User|null $user
 *
 * @package App\Models
 */
class ActivityLog extends Model
{
	protected $table = 'activity_log';
	protected $perPage = 10;

	protected $casts = [
		'fleet_activity_id' => 'int',
		'status' => 'int',
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'fleet_activity_id',
		'status',
		'description'
	];

	public function fleet_activity()
	{
		return $this->belongsTo(FleetActivity::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}
}
