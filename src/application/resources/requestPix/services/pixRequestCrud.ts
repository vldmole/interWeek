import { getRepository } from "typeorm";
import { PixRequestDto } from "../dtos/incoming/pixRequest.dto";
import { PixRequest } from "../entity/pixRequest";

//-------------------------------------------------------------------
export async function create(dto: PixRequestDto): Promise<PixRequest>
{
   const repository = getRepository(PixRequest);
   return repository.save(dto);
}

//-------------------------------------------------------------------
export async function save(pixRequest: Partial<PixRequest>): Promise<PixRequest>
{
   const repository = getRepository(PixRequest);
   return repository.save(pixRequest);
}

export async function remove(pixRequest: PixRequest)
{
   const repository = getRepository(PixRequest);
   repository.remove(pixRequest);
}
//-------------------------------------------------------------------
export async function findById(id: string): Promise<PixRequest | undefined>
{
   const repository = getRepository(PixRequest);
   return repository.findOne({
      where: {
         id: id
      }
   })
}



//-------------------------------------------------------------------
export default {
   create,
   findById,
   save,
   remove,
}