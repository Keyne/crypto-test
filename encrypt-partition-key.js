
import crypto from 'node:crypto';

function encryptPartitionKey(partitionKey) {
    
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;
    
    let candidate;
    
    if (!crypto) return;
    
    if (partitionKey) {
        if (typeof partitionKey !== 'string') {
            partitionKey = JSON.stringify(partitionKey);
        }
    }
    if (!partitionKey) {
      partitionKey = TRIVIAL_PARTITION_KEY;
    }
    
    console.info('Encrypting: ', partitionKey);

    candidate = crypto.createHash("sha3-512")
                    .update(partitionKey)
                    .digest("hex");
                      
    return candidate;                  
  }
  
  
  module.exports = encryptPartitionKey;
  