import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

export default function SkeletonCard({ data, status }) {

    return (
       
       <div className="card">
          <Skeleton height='20px' width='230px'/>
          <div className="card-middle">
             <Skeleton height='170px' width='170px' borderRadius='10px' />
             <div className="card-skills">
                <Skeleton height='50px' width='50px' borderRadius='5px' />
                <Skeleton height='50px' width='50px' borderRadius='5px' />
                <Skeleton height='50px' width='50px' borderRadius='5px' />
             </div>
          </div>
          <Skeleton height='10px' width='230px' borderRadius='5px' />
          <Skeleton height='10px' width='230px' borderRadius='5px' />
       </div>
    );
 }
 