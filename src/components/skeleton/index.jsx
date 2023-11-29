import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonCard() {
  return (
    <table>
      <thead />
      <tbody>
        <tr>
          <td>
            <Skeleton width={ 100 } count={ 5 } />

          </td>

          <td>
            <Skeleton width={ 100 } count={ 5 } />

          </td>
          <td>
            <Skeleton width={ 100 } count={ 5 } />

          </td>
          <td>
            <Skeleton width={ 100 } count={ 5 } />

          </td>
          <td>
            <Skeleton width={ 100 } count={ 5 } />

          </td>
          <td>
            <Skeleton width={ 100 } count={ 5 } />

          </td>
          <td>
            <Skeleton width={ 100 } count={ 5 } />

          </td>
          <td>
            <Skeleton width={ 100 } count={ 5 } />

          </td>
          <td>
            <Skeleton width={ 100 } count={ 5 } />

          </td>
          <td>
            <Skeleton width={ 100 } count={ 5 } />

          </td>
        </tr>
      </tbody>
    </table>
  );
}
